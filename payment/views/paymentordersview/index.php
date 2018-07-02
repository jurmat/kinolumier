<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel micro\models\PaymentOrdersSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Замовлення';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="payment-orders-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Створити замовлення', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php try {
        echo GridView::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                'id',
                'paymentuser_id',
                'orderID',
                'price',
                'discount',
//                'orderStatus',
                [
                    'attribute' => 'orderStatus',
                    'filter'=>array("1"=>"Виконано", "2"=>"В обробці"),
                    'format' => 'text',
                    'value' => function ($model) {
                        return $model->orderStatus == 1 ? "Виконано" : "В обробці";
                    },
                ],
//                'dateCreated',
                [
                    'attribute' => 'dateCreated',
                    'format' => ['date', 'php:Y.m.d']
                ],
//                'paymentType',
                [
                    'attribute' => 'paymentType',
                    'filter'=>array("1"=>"Готівковий", "2"=>"Безготівковий"),
                    'format' => 'text',
                    'value' => function ($model) {
                        return $model->paymentType == 1 ? "Готівковий" : "Безготівковий";
                    },
                ],
//                'isCompleted',
                [
                    'attribute' => 'isCompleted',
                    'filter'=>array("1"=>"Так", "0"=>"Ні"),
                    'format' => 'text',
                    'value' => function ($model) {
                        return $model->isCompleted == 1 ? "Так" : "Ні";
                    },
                ],

                ['class' => 'yii\grid\ActionColumn'],
            ],
        ]);
    } catch (Exception $e) {
    } ?>
</div>
