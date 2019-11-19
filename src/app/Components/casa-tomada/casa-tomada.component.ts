import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-casa-tomada',
  templateUrl: './casa-tomada.component.html',
  styleUrls: ['./casa-tomada.component.css']
})
export class CasaTomadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function() {
  
      $(document).on('scroll resize', function() {
        
        var $d = $(document),
            $w = $(window);
        
        $('div#scroll-bar').width(
          ($d.scrollTop() / ($d.height() - $w.height()) * $d.height()) + 'px'
        );
        
      });
     
   });
  }

}
