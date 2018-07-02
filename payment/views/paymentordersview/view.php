<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model micro\models\PaymentOrders */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Payment Orders', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="payment-orders-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Змінити', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Видалити', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Ви дійсно бажаєте видалити замовлення?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?php try {
        echo DetailView::widget([
            'model' => $model,
            'attributes' => [
                'id',
                'paymentuser_id',
                'orderID',
                'price',
                'discount',
//                'orderStatus',
                [
                    'attribute' => 'orderStatus',
                    'format' => 'text',
                    'value' => function ($model) {
                        return $model->orderStatus == 1 ? "Виконано" : "В обробці";
                    },
                ],
                'dateCreated',
//                'paymentType',
                [
                    'attribute' => 'paymentType',
                    'format' => 'text',
                    'value' => function ($model) {
                        return $model->paymentType == 1 ? "Готівковий" : "Безготівковий";
                    },
                ],
//                'isCompleted',
                [
                    'attribute' => 'isCompleted',
                    'format' => 'text',
                    'value' => function ($model) {
                        return $model->isCompleted == 1 ? "Так" : "Ні";
                    },
                ],
            ],
        ]);
    } catch (Exception $e) {
    } ?>

</div>
