'use strict';

import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import chaiThings from 'chai-things';
const expect = chai.expect;
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiThings);

import composition from './composition';

describe('composition', function () {
    it('should be a function', function () {
        expect(composition).to.be.a('function');
    });
    
    it('should return a function', function () {
        expect(composition()).to.be.a('function');
    });
    
    describe('function input', function () {
        let add;
        beforeEach(function () {
            add = sinon.spy();
        });
        
        it('should call add-function once if it is provided once', function () {
            composition(add)()
            expect(add).to.be.calledOnce;
        });
        
        it('should call add-function thrice if it is provided thrice', function () {
            composition(add,add,add)();
            expect(add).to.be.calledThrice;
        });
    });
});