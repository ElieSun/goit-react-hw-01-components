import { Item, Label, Percentage } from 'components/StatisticItem/StatisticItem.styled';
import randomColor from "randomcolor";
import PropTypes from 'prop-types';

export const StatisticItem = ({ item : { label, percentage } }) => {
    let color = randomColor();
    return (
        <Item color={color}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
        </Item>
    );
};

StatisticItem.propTypes = {
    item : PropTypes.shape ({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};
