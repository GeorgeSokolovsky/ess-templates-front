import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';

describe('AuthServiceService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: AuthService,
                    useValue: {
                        mutate: () => null
                    }
                }
            ]
        })
    );

    it('should be created', () => {
        const service: AuthService = TestBed.get(AuthService);

        expect(service).toBeTruthy();
    });
});
