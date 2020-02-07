const section = document.querySelector('section');
	function carregapagina(){
	
	
	fetch('https://lucasvmendes.github.io/SiteRocket/JSON/projetos.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
           var projetos = json['projetos']
	   for(var i = 0; i < projetos.length; i++)
	   {		
		var myDiv1 = document.createElement('div');
		var myDiv2 = document.createElement('div');
		var myDiv3 = document.createElement('div');
		var myPara1 = document.createElement('p');
		var myPara2 = document.createElement('p');
		var myPara3 = document.createElement('p');
		var myPara4 = document.createElement('p');
		var myPara5 = document.createElement('p');
		var myPara6 = document.createElement('p');
		var myPara7 = document.createElement('p');
		var myImg = document.createElement('img');
		myDiv1.className = "primeiraProj";
		myDiv2.className = "textocompletoProj";
		myDiv3.className = "informacoestecnicasProj";
		myImg.className = "imagemProj";
		myPara1.className = "informacoestecnicasProj";
		myPara2.className = "informacoestecnicasProj";
		myPara3.className = "informacoestecnicasProj";
		myPara4.className = "informacoestecnicasProj";
		myPara5.className = "informacoestecnicasProj";
		myPara6.className = "informacoestecnicasProj";
		myPara7.className = "tituloProj";
		myPara7.textContent = projetos[i].nome.toUpperCase();
		myDiv2.appendChild(myPara7);
		if(i == 0)
		{
			var myPara8 = document.createElement('p');
			var myPara9 = document.createElement('p');
			myPara8.className = "tituloPagina";
			myPara9.className = "textoabaixotitulo";
			myPara8.textContent = projetos[i].titulopagina.toUpperCase();
			myPara9.textContent = projetos[i].textoabaixotitulo;
			myDiv1.appendChild(myPara8);
			myDiv1.appendChild(myPara9);
		}
		var paragrafos = projetos[i].paragrafos;
		for(var j = 0; j < paragrafos.length; j++)
	    	{
			var myPara1 = document.createElement('p');
			myPara1.className = "textoescritoProj";
			myPara1.textContent = paragrafos[j];
			myDiv2.appendChild(myPara1);
	    	}
		myImg.src = projetos[i].patch;
		myPara2.textContent = "Nome: " + projetos[i].nome;
		myPara3.textContent = "Objetivo: " + projetos[i].objetivo;
		myPara4.textContent = "Início: " + projetos[i].inicio;
		myPara5.textContent = "Término: " + projetos[i].termino;
		myPara6.textContent = "Apogeu: " + projetos[i].apogeu;
		myDiv3.appendChild(myImg);
		myDiv3.appendChild(myPara2);
		myDiv3.appendChild(myPara3);
		myDiv3.appendChild(myPara4);
		myDiv3.appendChild(myPara5);
		myDiv3.appendChild(myPara6);
		myDiv1.appendChild(myDiv3);
		myDiv1.appendChild(myDiv2);
		section.appendChild(myDiv1);
	   }
   })
   .catch(function () {
       this.dataError = true;
   })
   
   
   fetch('https://lucasvmendes.github.io/SiteRocket/JSON/paginas.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
      	var paginas = json['paginas']
	<!-- Cria os elementos do menu, separa em classes e popula o menu completo -->
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
   