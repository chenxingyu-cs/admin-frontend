import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
