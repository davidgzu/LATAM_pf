import { Component, OnInit } from '@angular/core';
declare var $: any;



@Component({
  selector: 'app-la-noche',
  templateUrl: './la-noche.component.html',
  styleUrls: ['./la-noche.component.css']
})
export class LaNocheComponent implements OnInit {

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

