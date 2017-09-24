const AWS = require('aws-sdk')
const cloudformation = new AWS.CloudFormation({
    region: 'ap-southeast-1'
})

cloudformation.listExports({}, (err, data) => {
    if (err) throw err
    const variable = data.Exports.find(e => e.Name === `skynet-server-ApiEndpoint`)
    if (!variable) throw new Error('ApiEndpoint variable not found')
    console.log(variable.Value)
})
