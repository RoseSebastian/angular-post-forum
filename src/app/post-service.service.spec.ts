import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostServiceService } from './post-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Post } from './models/post.model';

describe('PostServiceService', () => {
  let service: PostServiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers: [PostServiceService]
    });
    service = TestBed.inject(PostServiceService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifies that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected posts (HttpClient called once)', () => {
    const posts: Post[] = [{ id: 1, title: 'Post 1', body: 'body 1', userId : 9 }, { id: 2, title: 'Post 2', body: 'body 2', userId : 13 }];
    service.getposts().subscribe(data => {
      expect(data).toEqual(posts);
    });
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toEqual('GET');
    req.flush(posts);
  });

  it('should return empty array if no posts are available', () => {
    const emptyPosts: Post[] = [];
    service.getposts().subscribe(data => {
      expect(data).toEqual(emptyPosts);
    });
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toEqual('GET');
    req.flush(emptyPosts);
  });
});
