import * as contentful from 'contentful'

export const client= contentful.createClient({
    space:'bt2bq2vg19fw',
    accessToken:'BlQe7kt-OJ_I4ZprP_eIC-ZJD46X7_8SCtbdzqAR0Qc'

    /*space:process.env.REACT-APP-SPACE-ID,
    accessToken:process.env.REACT-APP-ACCESS-TOKEN*/
})