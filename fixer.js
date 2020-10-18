	<script type=text/javascript>
	//Запоминаем первый введенный адрес
		var inAddress = null;
			
			window.onload = function () {
		var fieldAddress = 	document.getElementById("billing_address_1");
	
				fieldAddress.addEventListener("blur", function() {
					inAddress = fieldAddress.value;
    console.log(inAddress);
  });
				console.log(fieldAddress);
				
				//Ищем выбор доставки
			var shippingCdek = 	document.getElementById("order_review");
				console.log(shippingCdek);
					shippingCdek.addEventListener("click", function() {
						if(inAddress != null) {
							var AddressF = 	document.getElementById("billing_address_1");
							AddressF.value = inAddress;
							AddressF.innerHTML = inAddress;
						console.log("Cdek to address " + AddressF.value);
						}
					});
				
			}
			
	
	</script>
