describe("MetricConversionController", function() {
	var ctrl, scope;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller(MetricConversionController, {
			$scope : scope
		});
	}))

	it('should convert 1 kilomiter to mile', function() {
		//given
		scope.km = 1;

		//when
		scope.kmToMile();

		//then
		expect(scope.mile).toBe(0.621371192);
	});

	it('should convert 1 mile to kilometer', function() {
		//given
		scope.mile = 1;

		//when
		scope.mileToKm();

		//then
		expect(scope.km).toBe(1.621371192);
	});
});