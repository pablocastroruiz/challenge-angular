import { AppComponent } from './app.component';


describe('AppComponent', () => {
	let fixture: AppComponent;

	beforeEach( () => {
		fixture = new AppComponent();
	});

	describe( 'addNumbers', () => {
		it( 'should add together the 2 numbers passed', () => {

			//const result = fixture.addNumbers( 1, 3 );
      const result = fixture.addNumbers(1,3);

			expect( result ).toEqual( 4 );
		});

		it( 'use 2 as the default value if second number is not passed', () => {

			//const result = fixture.addNumbers(1);
      const result = fixture.addNumbers(1);

			expect(result).toEqual(3);
		});
	});

});