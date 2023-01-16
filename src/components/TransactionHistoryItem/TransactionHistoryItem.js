import { TableRow, TableData } from './TransactionHistoryItem.styled';
import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({item : {type, amount, currency}, index}) => {
    type = type.charAt(0).toUpperCase() + type.slice(1);
        return (
                <TableRow index={index}>
                    <TableData>{type}</TableData>
                    <TableData>{amount}</TableData>
                    <TableData>{currency}</TableData>
                </TableRow>
)
};

TransactionHistoryItem.propTypes = {
    items: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,

};
