const dns = require('dns');
const { Resolver } = require('dns');
const resolver = new Resolver();
const dnsPromises = dns.promises;

const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
}

// dns.lookup('https://dental-box-fe.herokuapp.com', options, (err, address, family) => {
//   console.log('address', address, family);
// });

// dns.resolve4('https://dental-box-fe.herokuapp.com', (err, address, family) => {
//   console.log('address', address, family);

// });

// dns.reverse('52.207.5.149', (err, hostsnames) => {
//   console.log(hostsnames)
// })

// dns.getServers()

dns.lookupService('52.5.109.89', '80', (err, hostname, service) => {
  console.log('lookupService', hostname, service);
});

resolver.resolveAny('https://dental-box-fe.herokuapp.com', (err, addresses) => {
  console.log('resolveAny', addresses)
});

/* methoods:
resolveAny - resolve all records
resolve4 - resolve a IPv4 addresses
resolve6 - resolve a IPv6 addresses
resolveCname - resolve a cname address
resolveMx - resolve mail exchange records
resolveNaptr - resolve regular expression based records
resolveNs - resolve name server records
resolvePtr - resolve pointer records
resolveSoa - resolve a start of authority record
resolveSrv - resolve service records
resolveTxt - esolve text queries */

// dns.setServers([
//   '4.4.4.4',
//   '[2001:4860:4860::8888]',
//   '4.4.4.4:1053',
//   '[2001:4860:4860::8888]:1053'
// ]);

const run = async () => {
  // resolver.setServers(['4.4.4.4']);
  try {
    const resp = await dnsPromises.resolve4('https://dental-box-fe.herokuapp.com');
    console.log('resp', resp);

    const reverse = await dnsPromises.reverse(resp[0]);
    console.log('reverse', reverse);

    const lookup = await dnsPromises.lookupService(resp[0], 80);
    console.log('lookup', lookup);

    console.log(resolver.getServers())

  } catch (err) {
    console.log(err)

  }
}
run()


