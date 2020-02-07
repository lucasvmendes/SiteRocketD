
  	const section = document.querySelector('section');
	function carregapagina(){
	// Corpo da página 
	// Consulta o arquivo json disponibilizado no link e verifica o status 
	fetch('https://lucasvmendes.github.io/SiteRocket/JSON/historia.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       	   // Se o documento estiver com status ´ok´ vai salvar as informações na variável historia 
	   var historia = json['historia']
	   // Cria os elementos da página, separa em classes e popula todo o corpo da página 
	   for(var i = 0; i < historia.length; i++)
	   {		
		var myDiv1 = document.createElement('div');
		var myImg = document.createElement('img');
		var myDiv2 = document.createElement('div');
		var myPara = document.createElement('p');
		myPara.textContent = historia[i].titulo.toUpperCase();
		myDiv2.appendChild(myPara);
		var paragrafos = historia[i].paragrafos;
		for(var j = 0; j < paragrafos.length; j++)
	    	{
			var myPara3 = document.createElement('p');
			myPara3.className = "textosobreequipe";
			myPara3.textContent = paragrafos[j];
			myDiv2.appendChild(myPara3);
	    	}
		// Cria um álbum de fotos 
		var myUl = document.createElement("UL");
		myUl.className = "ulimagemreduzida";
		var fotos = historia[i].fotos;
		for(var m = 0; m < fotos.length; m++)
		{
			var myLi1 = document.createElement("LI");
			var myA1 = document.createElement("a");
			var myImg2 = document.createElement("img");
			myImg2.className = "imagemreduzida";
			myLi1.className = "imagemreduzida";
			myA1.href = "#imagem" + m;
			myImg2.src = fotos[m];
			myA1.appendChild(myImg2);
			myLi1.appendChild(myA1);
			myUl.appendChild(myLi1);
		}
		for(var n = 0; n < fotos.length; n++)
		{
			var myDiv3 = document.createElement("div");
			var myDiv4 = document.createElement("div");
			var myA2 = document.createElement("a");
			var myA3 = document.createElement("a");
			var myImg3 = document.createElement("img");
			var myA4 = document.createElement("a");
			myDiv3.className = "divimggrande";
			myDiv3.id = "imagem" + n;
			myDiv4.className = "divimgaumentada";
			myA2.className = "voltavancfecha";
			myA2.id = "prev";
			myA2.textContent = "<<"
			if(n == 0)
				myA2.href = "#imagem" + n;
			else 
				myA2.href = "#imagem" + (n-1);
			myA3.href = "#";
			myA3.className = "voltavancfecha";
			myA3.id = "close";
			myA3.textContent = "X";
			myImg3.src = fotos[n];
			myImg3.className = "imagemaumentada"
			if(n == (fotos.length - 1))
				myA4.href = "#imagem" + n;
			else 
				myA4.href = "#imagem" + (n+1);
			myA4.className = "voltavancfecha";
			myA4.id = "next";
			myA4.textContent = ">>";
			myDiv4.appendChild(myA2);
			myDiv4.appendChild(myA3);
			myDiv4.appendChild(myImg3);
			myDiv4.appendChild(myA4);
			myDiv3.appendChild(myDiv4);
			myDiv2.appendChild(myDiv3);
		}
		myImg.src = historia[i].imagem;
		myDiv1.className = "imagemsemtexto";
		myDiv2.className = "sobreequipe";
		myPara.className = "titulosobreequipe";
		myImg.className = "imagemdefundo";
		myDiv1.appendChild(myImg);
		myDiv2.appendChild(myUl);
		section.appendChild(myDiv1);
		section.appendChild(myDiv2);
	   }
   })
   .catch(function () {
       this.dataError = true;
   })
	
// Menu principal 
   fetch('https://lucasvmendes.github.io/SiteRocket/JSON/paginas.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       // Se o documento estiver com status ´ok´ vai salvar as informações na variável paginas
	var paginas = json['paginas']
	// Cria os elementos do menu, separa em classes e popula o menu completo 
	var myHeader = document.createElement("HEADER");
	var myInput = document.createElement("input");
	var myLabel = document.createElement("label");
	var myNav = document.createElement("NAV");
	var myUl1 = document.createElement("UL");
	var myUl2 = document.createElement("UL");
	var myUlImg = document.createElement("img");
	myNav.className = "menu";
	myUl1.className = "menus";
	myUl2.className = "menuimagem";
	myUlImg.className = "ulimagem";
	myLabel.className = "lblmenu";
	myInput.setAttribute("type","checkbox");
	myInput.setAttribute("id","bt_menu");
	myLabel.innerText = "\u2630";
	myLabel.setAttribute("for","bt_menu");
	for(var i = 0; i < paginas.length; i++)
	{
		if(paginas[i].topico.toString() == "Início")
		{
			myUlImg.src = paginas[i].imagem;
			var direcionamento = "location = ' " + paginas[i].direcionapagina + " ' ";
			myUlImg.setAttribute("onclick", direcionamento);
		}
		var myLi = document.createElement("LI");
		var myTit = document.createElement("A");
		myTit.textContent = paginas[i].topico.toUpperCase();
		var direcionamento = "location = ' " + paginas[i].direcionapagina + " ' ";
		myLi.setAttribute("onclick", direcionamento);
		myLi.className = "home";
		myTit.className = "amenu";
		myLi.appendChild(myTit);
		myUl1.appendChild(myLi);
	}
	myUl2.appendChild(myUlImg);
	myUl2.appendChild(myLabel);
	myNav.appendChild(myInput);
	myNav.appendChild(myUl2);
	myNav.appendChild(myUl1);
	myHeader.appendChild(myNav);
	document.body.insertBefore(myHeader, section);
   })
   .catch(function () {
       this.dataError = true;
   })
   }