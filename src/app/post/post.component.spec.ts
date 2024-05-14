import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { Store, StoreModule } from '@ngrx/store';
import { _provideStore } from '@ngrx/store/src/provide_store';
import { Post } from '../models/post.model';
import { selection } from '../post.action';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent, StoreModule.forRoot({})],
    })
    .compileComponents();
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch selection action on onSelection', () => {
    const post: Post = { id: 1, title: 'Post 1', body: 'body 1', userId : 9 };
    const selectionAction = selection({ selectedPost: post });
    component.onSelection(post);
    expect(store.dispatch).toHaveBeenCalledWith(selectionAction);
  });

  it('should update visibleProperty and previousPost on onSelection', () => {
    const post1: Post = { id: 1, title: 'Post 1', body: 'body 1', userId : 9 };
    const post2: Post = { id: 2, title: 'Post 2', body: 'body 2', userId : 13 };

    // Initial state
    expect(component.visibleProperty).toBe(0);
    expect(component.previousPost).toBe(undefined);

    // First selection
    component.onSelection(post1);
    expect(component.visibleProperty).toBe(0);
    expect(component.previousPost).toBe(1);

    // Second selection
    component.onSelection(post2);
    expect(component.visibleProperty).toBe(0); // It should reset to 0
    expect(component.previousPost).toBe(2);

    // Third selection with same post id
    component.onSelection(post2);
    expect(component.visibleProperty).toBe(1); // It should increase to 1
    expect(component.previousPost).toBe(2);
  });

    //Is proreties are rotating; visibleProperty should reset to 0 on 5th Selction on same Post
    it('should update visibleProperty and previousPost on onSelection', () => {
      const post1: Post = { id: 1, title: 'Post 1', body: 'body 1', userId : 9 };  
      // First selection
      component.onSelection(post1);
      expect(component.visibleProperty).toBe(0);
      expect(component.previousPost).toBe(1);
        // Second selection
      component.onSelection(post1);
      expect(component.visibleProperty).toBe(1); // It should increase to 1
      expect(component.previousPost).toBe(1);
        // Third selection
      component.onSelection(post1);
      expect(component.visibleProperty).toBe(2); // It should increase to 2
      expect(component.previousPost).toBe(1);
        // Fourth selection
      component.onSelection(post1);
      expect(component.visibleProperty).toBe(3); // It should increase to 3
      expect(component.previousPost).toBe(1);
        // Fifth selection
      component.onSelection(post1);
      expect(component.visibleProperty).toBe(0); // It should rest to 0
      expect(component.previousPost).toBe(1);
    });
  
  it('should not increment visibleProperty if previousPost is undefined', () => {
    const post: Post = { id: 1, title: 'Post 1', body: 'body 1', userId : 9 };
    component.previousPost = undefined;
    component.onSelection(post);
    expect(component.visibleProperty).toBe(0); // It should remain 0
  });
});
