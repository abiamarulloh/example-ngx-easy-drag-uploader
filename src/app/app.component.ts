import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-ngx-easy-drag-uploader';

  onFilesUploaded(files: File[]) {
    console.log('Uploaded files:', files);
    // Further processing of files...
  }

}
