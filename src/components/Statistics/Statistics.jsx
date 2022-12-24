// import PropTypes from  'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div class="container">

        <section class="statistics">

        {title && <h2 class="title">{title}</h2>}

        <ul class="stat-list">

        {stats.map(e => (
        <li class="item" key={e.id}>
        <span class="label">{e.label}</span>
        <span class="percentage">{e.percentage}</span>
        </li>
        ))}

        </ul>
        </section>;
  </div>);
};

export default Statistics;