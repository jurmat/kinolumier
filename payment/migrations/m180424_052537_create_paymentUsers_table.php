<?php

use yii\db\Migration;

/**
 * Handles the creation of table `paymentUsers`.
 */
class m180424_052537_create_paymentUsers_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        
        
        $this->createTable('paymentUsers', [
            'id' => $this->primaryKey(),
            'name' => $this->string(40),
            'surname' => $this->string(40),
            'username' => $this->string(100)->notNull()->unique(),
            'password' => $this->string()->notNull(),
            'phoneNumber' => $this->string(15),
            'dateRegistered' => $this->dateTime() . ' DEFAULT NOW()',
            'dateLastActive' => $this->dateTime(),
            'isAgreeSeeMessages' => $this->boolean(),
            //1-active 2-blocked 3-deleted
            'status' => $this->integer()->defaultValue(1),
            'access_token' => $this->string(),
            'auth_key' => $this->string(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('paymentUsers');
    }
}
