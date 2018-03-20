import * as chai from 'chai';
import st from 'supertest';
import { getServer } from './';
const expect = chai.expect;
let svr: any;

before((done) => {
    svr = getServer();
    done();
});

after((done) => {
    svr.close();
    done();
});

it('Hello World test', (done) => {
    st(svr)
        .get('/')
        .end(function (err, res) {
            expect(res.body.message).to.be.equal('Hello World');
            done();
        });
}) 