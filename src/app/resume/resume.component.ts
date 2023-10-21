import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('viewer') viewerRef: ElementRef;

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../assets/lib',
      initialDoc: '../../assets/pdf/AlainGhawiResume.pdf'
    }, this.viewerRef.nativeElement).then(instance => {

    })
  }

}
