import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { PostComponent } from './post/post.component';
import { Post } from './models/post.model';
import { of } from 'rxjs';
import { loadPosts } from './post.action';
import { getCurrentPosts } from './post.selector';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  let store: MockStore;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const initialState = {
    posts: {
      posts: [{ userId : 8, id: 1, title: 'Post 1', body: 'body 1' }],
      currentPost: { userId : 8, id: 1, title: 'Post 1', body: 'body 1'}
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, StoreModule.forRoot({}), PostComponent,],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
    store = TestBed.inject(Store) as MockStore;
    spyOn(store, 'dispatch').and.callThrough();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize posts and currentPost on ngOnInit', () => {
    const posts: Post[] = [{ userId : 8, id: 1, title: 'Post 1', body: 'body 1'}];
    spyOn(store, 'select').and.returnValue(of(posts));
    component.ngOnInit();
    component.posts?.subscribe((results =>{
      expect(results).toEqual(posts)
    }))
    expect(store.dispatch).toHaveBeenCalledWith(loadPosts());
    expect(component.currentPost).toEqual(store.select(getCurrentPosts));
  });

});
