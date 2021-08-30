import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoCodeService {

  constructor(private http: HttpClient) {}

  getResource(resourceName: string): Observable<DemoCodeResource> {
    return forkJoin([
      this.getContent(resourceName, 'html'),
      this.getContent(resourceName, 'ts')
    ]).pipe(
      map(([html, typescript]) => {
        return {
          html: html,
          typescript: typescript
        } as DemoCodeResource;
      })
    );
  }

  private getContent(resourceName: string, resourceSuffix: string): Observable<string> {
    const folder = resourceName.replace(/-demo.*/, '');
    return this.http.get<string>(`app/components/demos/${folder}/${resourceName}.component.${resourceSuffix}`, {responseType: 'text' as 'json'});
  }
}

export class DemoCodeResource {
  html: string;
  typescript: string;
}