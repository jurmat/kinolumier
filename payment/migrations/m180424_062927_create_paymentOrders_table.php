<?php

use yii\db\Migration;

/**
 * Handles the creation of table `paymentOrders`.
 * Has foreign keys to the tables:
 *
 * - `paymentUsers`
 */
class m180424_062927_create_paymentOrders_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('paymentOrders', [
            'id' => $this->primaryKey(),
            'paymentuser_id' => $this->integer()->notNull(),
            'orderID' => $this->integer()->notNull(),
            'price' => $this->integer()->notNull(),
            'discount' => $this->integer(),
            //1-completed 2-processing
            'orderStatus' => $this->integer()->notNull(),
            'dateCreated' => $this->dateTime() . ' DEFAULT NOW()',
            //1-cash 2-card
            'paymentType' => $this->integer()->notNull(),
            'isCompleted' => $this->boolean()->notNull(),
        ]);

        // creates index for column `paymentuser_id`
        $this->createIndex(
            'idx-paymentOrders-paymentuser_id',
            'paymentOrders',
            'paymentuser_id'
        );

        // add foreign key for table `paymentUsers`
        $this->addForeignKey(
            'fk-paymentOrders-paymentuser_id',
            'paymentOrders',
            'paymentuser_id',
            'paymentUsers',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `paymentUsers`
        $this->dropForeignKey(
            'fk-paymentOrders-paymentuser_id',
            'paymentOrders'
        );

        // drops index for column `paymentuser_id`
        $this->dropIndex(
            'idx-paymentOrders-paymentuser_id',
            'paymentOrders'
        );

        $this->dropTable('paymentOrders');
    }
}
