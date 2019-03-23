import _ from 'lodash';

const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
const result = _.find(users, function(o) { return o.age < 40; });

export default () => {
    console.log('test function');
}

