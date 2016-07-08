import Immutable from 'immutable';
export default Immutable.fromJS({
  ClustersStore: {
    'test': { url: 'test', name: 'Test Cluster', username: 'foo', password: 'bar', status: 'UP' },
  },
  PodsStore: {
    status: {'test': 'success'},
    pods: {
      'test': [
        {type: 'pods', metadata: {
          name: 'Pod A',
          resourceVersion: 99,
          uid: '123456789',
          labels: {
            hostname: 'test',
            env: 'prod',
          },
        }},
      ],
    },
  },
  ServicesStore: {
    status: {'test': 'success'},
    services: {
      'test': [
        {type: 'services', metadata: { name: 'Service A', labels: {label: 'value'} }},
        {type: 'services', metadata: { name: 'Service B' }},
        {type: 'services', metadata: { name: 'Service C' }},
      ],
    },
  },
  ReplicationsStore: {
    status: {'test': 'success'},
    replications: {
      'test': [
        {type: 'replications', metadata: { name: 'Replication Controller A' }},
        {type: 'replications', metadata: { name: 'Replication Controller B' }},
      ],
    },
  },
});
