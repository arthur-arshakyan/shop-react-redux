import React from 'react'
import styles from './Charts.module.css'

const Charts = () => {
  return (
    <div className={styles.charts}>
        <h1>Charts</h1>
        <h2>Welcome to the Clothing Shop's Charts section! As a clothing business owner, this section provides you with a wealth of valuable insights and analytics to help you optimize and grow your store. Let's dive into some of the charts available:</h2>
        <div className={styles.text}>
            <p>
                <b>Sales Revenue Chart:</b> <br/>
                The Sales Revenue chart offers a comprehensive overview of your clothing shop's financial performance. It visually represents your sales revenue over a specific period, enabling you to track trends, identify peak seasons, and make informed decisions regarding pricing strategies, promotions, and inventory management. With this chart, you can gain a clear understanding of your store's sales patterns and identify opportunities for revenue growth.
            </p>
            <p>
                <b>Inventory Level Chart:</b> <br/>
                Managing inventory is crucial for any clothing shop. The Inventory Level chart allows you to monitor the quantity of clothing items in stock at any given time. By visualizing your inventory levels, you can easily track stock availability, identify popular products that may require restocking, and ensure optimal inventory management. This chart empowers you to avoid stockouts, minimize excess inventory, and provide a seamless shopping experience for your customers.
            </p>
            <p>
                <b>Sales by Category Chart:</b> <br/>
                Understanding which clothing categories are performing well is vital for effective merchandising and marketing strategies. The Sales by Category chart categorizes your sales data based on different product categories, such as tops, bottoms, dresses, or accessories. It helps you identify the most popular categories, track sales trends, and make data-driven decisions when it comes to assortment planning, marketing campaigns, and stock allocation. This chart enables you to optimize your inventory and maximize sales opportunities.
            </p>
        </div>
    </div>
  )
}

export default Charts