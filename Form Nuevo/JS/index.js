function verifyInfo(nombre, pass){
		var n= document.getElementById('nombre');
		var p = document.getElementById('pass')
			if (n.value === '' || p.value === '') {
				alert('Completar datos');
			}
	};