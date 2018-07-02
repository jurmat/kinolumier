<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model micro\models\User */
/* @var $form yii\widgets\ActiveForm */
?>
<div class="container">
    <div class="row">


<div class="user-form">

    <?php $form = ActiveForm::begin(); ?>
    <div class="col-12 col-md-6">
    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
    </div>
    <div class="col-12 col-md-6">
    <?= $form->field($model, 'surname')->textInput(['maxlength' => true]) ?>
    </div>
    <div class="col-12 col-md-6">
    <?= $form->field($model, 'username')->textInput(['maxlength' => true]) ?>
    </div>
    <div class="col-12 col-md-6">
    <?= $form->field($model, 'password')->passwordInput(['maxlength' => true]) ?>
    </div>
    <div class="col-12 col-md-6">
    <?= $form->field($model, 'phoneNumber')->textInput(['maxlength' => true]) ?>
    </div>
    <div class="col-12 col-md-6">
    <?= $form->field($model, 'dateLastActive')->textInput() ?>
    </div>
    <?php // $form->field($model, 'isAgreeSeeMessages')->textInput() ?>

        <?php /* $form->field($model, 'dateRegistered')->textInput() */ ?>
    <div class="col-12 col-md-6">
    <?php echo $form->field($model, 'isAgreeSeeMessages')->dropDownList(
        ["1"=>"Так", "2"=>"Ні"]
    ); ?>
    </div>
    <div class="col-12 col-md-6">
    <?php //$form->field($model, 'status')->textInput() ?>

    <?php echo $form->field($model, 'status')->dropDownList(
        ["1"=>"Активний", "2"=>"Заблокований", "3" => "Видалений"]
    ); ?>
    </div>
    <?php /*$form->field($model, 'access_token')->textInput(['maxlength' => true]) */?>

    <?php /*$form->field($model, 'auth_key')->textInput(['maxlength' => true]) */?>

    <div class="col-12 pull-right form-group">
        <?= Html::submitButton('Зберегти', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>

    </div>
</div>
