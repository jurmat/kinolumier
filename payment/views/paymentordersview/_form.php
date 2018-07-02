<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model micro\models\PaymentOrders */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="container">
    <div class="row">

<div class="payment-orders-form">

    <?php $form = ActiveForm::begin(); ?>
    <div class="col-12 col-md-6">
    <?= $form->field($model, 'paymentuser_id')->textInput() ?>
    </div>

    <div class="col-12 col-md-6">
    <?= $form->field($model, 'orderID')->textInput() ?>
    </div>

    <div class="col-12 col-md-6">
    <?= $form->field($model, 'price')->textInput() ?>
    </div>

    <div class="col-12 col-md-6">
    <?= $form->field($model, 'discount')->textInput() ?>
    </div>

    <div class="col-12 col-md-6">
    <?php // $form->field($model, 'orderStatus')->textInput() ?>
    <?php echo $form->field($model, 'orderStatus')->dropDownList(
        ["1"=>"Виконано", "2"=>"В обробці"]
    ); ?>
    </div>

    <div class="col-12 col-md-6">
    <?= $form->field($model, 'dateCreated')->textInput() ?>
    </div>

    <div class="col-12 col-md-6">
    <?php // $form->field($model, 'paymentType')->textInput() ?>
    <?php echo $form->field($model, 'paymentType')->dropDownList(
        ["1"=>"Готівковий", "2"=>"Безготівковий"]
    ); ?>
    </div>

    <div class="col-12 col-md-6">
    <?php // $form->field($model, 'isCompleted')->textInput() ?>
    <?php echo $form->field($model, 'isCompleted')->dropDownList(
        ["1"=>"Так", "0"=>"Ні"]
    ); ?>
    </div>

    <div class="col-12 pull-right form-group">
        <?= Html::submitButton('Зберегти', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
    </div>
</div>