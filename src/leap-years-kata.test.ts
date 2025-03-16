import { describe, expect, it } from 'vitest';
import { LeapYearsKata } from 'src/leap-years-kata.ts';

describe('Leap Years Kata', () => {
    it('Creating an instance of the LeapYearsKata class should work', () => {
        const leapYearsKata = new LeapYearsKata();
        expect(leapYearsKata).toBeDefined();
    });
});
