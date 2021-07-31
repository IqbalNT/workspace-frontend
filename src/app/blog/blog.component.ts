import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Appservice } from '../app.service';
import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../auth/models/auth.model';
import { AsyncService } from '../shared/services/async.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
  post: string;
  newpostSub: Subscription;
  authSub: Subscription;
  logedUserInfo: UserInfo;
  formId = 'commentForm';
  form: FormGroup;
  allPostSub: Subscription;
  allPost: any;
  addCommentSub: Subscription;
  addUpVoteSub: Subscription;
  addDownVoteSub: Subscription;
  constructor(
    private fb: FormBuilder,
    private appservice: Appservice,
    private authService: AuthService,
    public asyncService: AsyncService,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authSub = this.authService.authInfo.subscribe((auth) => {
      if (auth && auth.userInformation) {
        this.logedUserInfo = auth.userInformation;
      }
    });
    this.form = this.fb.group({
      comment: ['', [Validators.required]],
    });
    this.getAllPost();
  }
  getAllPost() {
    this.allPostSub = this.appservice.getAllPost().subscribe((data) => {
      if (data.length) {
        data.map((post: any) => {
          if (post.upVotes && post.upVotes.length) {
            let pp = post.upVotes.filter(
              (vote: any) => vote.voterId === this.logedUserInfo._id
            );
            if (pp.length) {
              post.upVote = true;
            }
          }
          if (post.downVotes && post.downVotes.length) {
            let pp = post.downVotes.filter(
              (vote: any) => vote.voterId === this.logedUserInfo._id
            );
            if (pp.length) {
              post.downVote = true;
            }
          }
        });
        this.allPost = data;

        console.log(this.allPost);
      }
    });
  }

  onWritePost(e: any) {
    this.post = e.target.value;
  }

  onCreateNewPost() {
    this.asyncService.start();
    if (this.post === '') {
      return;
    }

    let postDetails = {
      userId: this.logedUserInfo._id,
      userName: this.logedUserInfo.name,
      post: this.post,
    };
    this.newpostSub = this.appservice.createNewPost(postDetails).subscribe(
      (isAdded) => {
        if (isAdded) {
          this.post = '';
          this.getAllPost();
          this.commonService.showSuccessMsg('New Post Created');
          this.asyncService.finish();
        } else {
          this.commonService.showErrorMsg('Error! Post not created');
          this.asyncService.finish();
        }
        this.router.navigate(['/']);
      },
      (error) => {
        this.asyncService.finish();
        this.commonService.showErrorMsg('Error! Post not created');
      }
    );
  }
  onUpVote(postId: string) {
    const voterInfo: any = {
      voterId: this.logedUserInfo._id,
      votername: this.logedUserInfo.name,
    };
    this.addUpVoteSub = this.appservice.upVote(voterInfo, postId).subscribe(
      (isAdded) => {
        if (isAdded) {
          this.getAllPost();
        }
      },
      (error) => {
        this.commonService.showErrorMsg('Error! Vote not Added');
      }
    );
  }
  onDownVote(postId: string) {
    const voterInfo: any = {
      voterId: this.logedUserInfo._id,
      votername: this.logedUserInfo.name,
    };
    this.addDownVoteSub = this.appservice.downVote(voterInfo, postId).subscribe(
      (isAdded) => {
        if (isAdded) {
          this.getAllPost();
        }
      },
      (error) => {
        this.commonService.showErrorMsg('Error! Vote not Added');
      }
    );
  }

  onSubmitComment(comment: any, postId: string) {
    if (this.form.valid) {
      const commentInfo: any = {
        commenterId: this.logedUserInfo._id,
        commenterName: this.logedUserInfo.name,
        comment: comment.comment,
      };

      this.addCommentSub = this.appservice
        .addComment(commentInfo, postId)
        .subscribe(
          (isAdded) => {
            if (isAdded) {
              this.form.patchValue({
                comment: '',
              });
              this.getAllPost();
            } else {
              this.commonService.showErrorMsg('Error! Comment not Added');
            }
          },
          (error) => {
            this.commonService.showErrorMsg('Error! Comment not Added');
          }
        );
    }
  }
  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
    if (this.newpostSub) {
      this.newpostSub.unsubscribe();
    }
    if (this.addUpVoteSub) {
      this.addUpVoteSub.unsubscribe();
    }
    if (this.addDownVoteSub) {
      this.addDownVoteSub.unsubscribe();
    }
    if (this.addCommentSub) {
      this.addCommentSub.unsubscribe();
    }
    this.asyncService.finish();
  }
}
