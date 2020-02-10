	const section = document.querySelector('section');
	function carregapagina(){
	// Corpo da página
	// Consulta o arquivo json disponibilizado no link e verifica o status
	fetch('https://lucasvmendes.github.io/SiteRocketD/JSON/paginas.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       // Se o documento estiver com status ´ok´ vai salvar as informações na variável paginas 
	   var paginas = json['paginas']
	   // Cria os elementos da página, separa em classes e popula todo o corpo da página
	   for(var i = 1; i < paginas.length; i++)
	   {
		var myDiv1 = document.createElement('div');
		var myDiv2 = document.createElement('div');
		var myH1 = document.createElement('h1');
		var myPara = document.createElement('p');
		var myClic = document.createElement('button');
		var myImg = document.createElement('img');
		if(i%2 == 0)
		{
			myDiv1.className = "primeiraHomeOne";
			myDiv2.className = "textocompletoHomeOne";
			myH1.className = "tituloHomeOne";
			myImg.className = "imagemHomeOne";
		}
		else
		{
			myDiv1.className = "primeiraHomeTwo";
			myDiv2.className = "textocompletoHomeTwo";
			myH1.className = "tituloHomeTwo";
			myImg.className = "imagemHomeTwo";
		}
		myClic.textContent = "saiba mais";
		var direcionamento = "location = ' " + paginas[i].direcionapagina + " ' ";
		myClic.setAttribute("onclick", direcionamento);
		myH1.textContent = paginas[i].topico.toUpperCase();
		myDiv2.appendChild(myH1);
		var paragrafos = paginas[i].paragrafos;
		for(var j = 0; j < paragrafos.length; j++)
	    	{
			var myPara = document.createElement('p');
			myPara.className = "textoescritoHome";
			myPara.textContent = paragrafos[j];
			myDiv2.appendChild(myPara);
	    	}
		myDiv2.appendChild(myClic);
		myImg.src = paginas[i].imagem;
		myDiv1.appendChild(myDiv2);
		myDiv1.appendChild(myImg);
		section.appendChild(myDiv1);
	   }
   })
   .catch(function () {
       this.dataError = true;
   })
   
   // Menu principal
   fetch('https://lucasvmendes.github.io/SiteRocketD/JSON/paginas.json')
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
