var minimatch = require('minimatch')

var packages = {
    '@*/*': {
        access: [
            '$all'
        ],
        publish: [
            '$authenticated'
        ],
        proxy: [

        ]
    },
    '*': {
        access: [
            '$all'
        ],
        publish: [
            '$authenticated'
        ],
        proxy: [
            'npmjs'
        ]
    },
    '**': {
        access: [

        ],
        publish: [

        ],
        proxy: [

        ]
    }
}

var package = '@braintree/sanitize-url'

for (var i in packages) {
    if (minimatch.makeRe(i).exec(package)) {
        console.log(packages[i])
    }
}
