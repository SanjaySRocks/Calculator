$(document).ready(function() {

	$("#fuelbtn").click(function(){
		CalFuel();
	});

	function CalFuel()
	{
		var a = $("#fuel_distance").val();
		var b = $("#fuel_average").val();
		var c = $("#fuel_cost").val();

		a = a || 0;
		
		var a1 = parseFloat(a) / parseFloat(b);
		var t1 = parseFloat(a1) * parseFloat(c);

		a1 = parseFloat(a1).toFixed(2);
		t1 = parseFloat(t1).toFixed(2);

		$("#fuel_total_litres").val(a1 + " Ltrs");
		$("#total_fuel").val(t1 + " Rs.");
	}

});
