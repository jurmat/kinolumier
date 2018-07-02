<?php

use yii\db\Migration;

/**
 * Class m180427_190128_add_users
 */
class m180427_190128_add_users extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
            $this->insert('paymentUsers',
            array( 'name' => 'Ігор',
                    'surname' => 'Сидоренко',
                    'username' => 'user@gmail.com',
                    'password'=>'$2y$13$Kf3rZgkCjujpgXEcWtfKs.vJWkD0IJGNaD015XgGB4qvCE3JbYDX.',
                    'phoneNumber' => '+380664521236',
                    'dateRegistered' => '2018-04-05 00:00:00',
                    'dateLastActive' => '2018-04-05 00:00:00',
                    'isAgreeSeeMessages' => true,
                    //1-active 2-blocked 3-deleted
                    'status' => '1',
                    'access_token' => \Yii::$app->getSecurity()->generateRandomString(200),
                    'auth_key' => 'QAHgCzelUHilY-scwwPU9LAhGqy6oIHJ',
                     ));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m180427_190128_add_users cannot be reverted.\n";

        return true;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180427_190128_add_users cannot be reverted.\n";

        return false;
    }
    */
}
