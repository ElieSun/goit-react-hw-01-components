import { TransactionTable, Head, Body, TableRow } from './TransactionHistory.styled';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';


export const TransactionHistory = ({items}) => {
        return (
            <TransactionTable>
                <Head>
                    <TableRow>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </TableRow>
                </Head>
                <Body>
                    {items.map ((item, index) => 
                        <TransactionHistoryItem key={item.id} index={index} item={item}></TransactionHistoryItem>
                    )}
                </Body>
            </TransactionTable>
)
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired,
};
