/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';

// Components
import {
    Button,
    Flex,
    Text,

    // Hooks
    useStyleConfig
} from '@salesforce/retail-react-app/app/components/shared/ui'


// Constants
const SELECT_ID = 'pagination'

/**
 * The pagination component is a simple component allowing you to navigate
 * from one page  to the next by means of previous or next buttons, or directly
 * using a select drop down.
 */
const Pagination = (props) => {
    const styles = useStyleConfig('Pagination')
    const {urls, currentURL, ...rest} = props

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`https://${kv7kzm78}.api.commercecloud.salesforce.com/search/shopper-search/${v3}`,
            {
                params: {
                    page,
                },
            }
            );
            setProducts([...products, ...response.data.products]);
            setPage(page + 1);
        } catch (error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    

    // Determine the current page index.
    return (
        <Flex data-testid="sf-pagination" className="sf-pagination" {...styles.container} {...rest}>
           {products.map((product) => (
            <div key={product.id} >
                <Text>{product.name}</Text>
            </div>
           ))}
            {/* Load More Button*/}
            <Button onClick={handleLoadMore} disabled={loading}>Load More</Button>
        </Flex>
    );
}
export default Pagination
