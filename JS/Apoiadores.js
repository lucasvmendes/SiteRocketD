  	const section = document.querySelector('section');
	function carregapagina(){
	// Corpo da página -->
	// Consulta o arquivo json disponibilizado no link e verifica o status -->
	fetch('https://lucasvmendes.github.io/SiteRocketD/JSON/apoiadores.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       // Se o documento estiver com status ´ok´ vai salvar as informações na variável patrocinios -->
	   var patrocinios = json['patrocinios']
	   // Cria os elementos da página, separa em classes e popula todo o corpo da página -->
	   for(var i = 0; i < patrocinios.length; i++)
	   {
		var myDiv1 = document.createElement('div');
		var myDiv2 = document.createElement('div');
		var myH1 = document.createElement('h1');
		var myPara = document.createElement('p');
		var myClic = document.createElement('button');
		var myImg = document.createElement('img');
		myDiv1.className = "primeiroPatro";
		myDiv2.className = "textocompletoPatro";
		myH1.className = "tituloPatro";
		myImg.className = "imagemPatro";
		myClic.className = "direcionaPatro";
		myClic.textContent = "saiba mais";
		var direcionamento = "location = ' " + patrocinios[i].direcionapagina + " ' ";
		myClic.setAttribute("onclick", direcionamento);
		if(i == 0)
		{
			var myPara1 = document.createElement('p');
			var myPara2 = document.createElement('p');
			myPara1.className = "tituloPagina";
			myPara2.className = "textoabaixotitulo";
			myPara1.textContent = patrocinios[i].titulopagina.toUpperCase();
			myPara2.textContent = patrocinios[i].textoabaixotitulo;
			myDiv1.appendChild(myPara1);
			myDiv1.appendChild(myPara2);
		}
		myH1.textContent = patrocinios[i].patrocinador.toUpperCase();
		myDiv2.appendChild(myH1);
		var paragrafos = patrocinios[i].paragrafos;
		for(var j = 0; j < paragrafos.length; j++)
	    	{
			var myPara = document.createElement('p');
			myPara.className = "textoescritoPatro";
			myPara.textContent = paragrafos[j];
			myDiv2.appendChild(myPara);
	    	}
		myDiv2.appendChild(myClic);
		myImg.src = patrocinios[i].imagem;
		myDiv1.appendChild(myDiv2);
		myDiv1.appendChild(myImg);
		section.appendChild(myDiv1);
	   }
	   
   })
   .catch(function () {
       this.dataError = true;
   })
	
   // Menu principal -->
   fetch('https://lucasvmendes.github.io/SiteRocketD/JSON/paginas.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       // Se o documento estiver com status ´ok´ vai salvar as informações na variável paginas -->
	var paginas = json['paginas']
	// Cria os elementos do menu, separa em classes e popula o menu completo -->
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
		if(i == 0)
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
