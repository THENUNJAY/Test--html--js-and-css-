function colorFunction(){


    const ids = ['showcase','htmlBx','cssBX','graphicBX','slides','boxes','aboutCont','main'];

      ids.map((item)=>{

        (document.getElementById(item)==null) ? item : (document.getElementById(item).classList.toggle('themeClass'));
        
      })

    }