import { StatisticItem } from "../StatisticItem/StatisticItem";
import { StatisticsSection, Title, StatList } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    let heading = title ? <Title>{title}</Title> : null;
    return (
        <StatisticsSection>
            {heading}
            <StatList>
                { stats.map (item => 
                    <StatisticItem key={item.id} item={item}/>
                )}
            </StatList>
        </StatisticsSection>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
    })).isRequired,
    
};
