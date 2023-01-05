import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div class="container">

        <section class="statistics">

        {title && <h2 class="title">{title}</h2>}

        <ul class="stat-list">
            {stats.map( ({ id, label, percentage })=> (
            <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
            </li>
            ))}
        </ul>
        </section>;
  </div>);
};

Statistics.propTypes = {
title: PropTypes.string,
id: PropTypes.string,
label: PropTypes.string,
percentage: PropTypes.number,
}

export default Statistics;