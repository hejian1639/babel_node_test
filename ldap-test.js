var LdapAuth = require('ldapauth-fork');
// var LdapAuth = require('ldapauth');

var options = {
    url: 'ldap://hc.cn/',
    bindDN: 'app_alm@hc.cn',
    bindCredentials: 'A!9viD6k',
    searchBase: 'OU=HC_Users,DC=hc,DC=cn',
    searchFilter: '(&(sAMAccountName={{username}}))',
};
var auth = new LdapAuth(options);


auth.on('error', function (err) {
    console.error('LdapAuth: ', err);
});
auth.authenticate("john.hetj", "1234@abc", function (err, user) {
    console.error(err);
    console.info(user)
 });
auth.close(function (err) { })