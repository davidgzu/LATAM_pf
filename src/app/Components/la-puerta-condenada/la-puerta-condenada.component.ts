import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-la-puerta-condenada',
  templateUrl: './la-puerta-condenada.component.html',
  styleUrls: ['./la-puerta-condenada.component.css']
})
export class LaPuertaCondenadaComponent implements OnInit {

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
