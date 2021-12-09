function stopCar () {
    carSpeed = 0
    carMove(carSpeed, carSpeed, carSpeed, carSpeed)
}
function carMove (m1Speed: number, m2Speed: number, m3Speed: number, m4Speed: number) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    m2Speed,
    SuperBit.enMotors.M1,
    m1Speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    m3Speed,
    SuperBit.enMotors.M4,
    m4Speed
    )
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    BleData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    basic.showString(BleData)
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        m1Speed = 255
        m2Speed = 255
        m3Speed = 255
        m4Speed = 255
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        m1Speed = -255
        m2Speed = -255
        m3Speed = -255
        m4Speed = -255
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        m1Speed = -255
        m2Speed = 255
        m3Speed = 255
        m4Speed = -255
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        m1Speed = 255
        m2Speed = -255
        m3Speed = -255
        m4Speed = 255
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . # .
            `)
        m1Speed = 255
        m2Speed = 255
        m3Speed = 40
        m4Speed = 40
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            . # . . .
            `)
        m1Speed = 40
        m2Speed = 40
        m3Speed = 255
        m4Speed = 255
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showLeds(`
            # # . # #
            # . # # #
            # # . # #
            # # # . #
            # # . # #
            `)
        m1Speed = 255
        m2Speed = 255
        m3Speed = -255
        m4Speed = -255
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showLeds(`
            # # . # #
            # # # . #
            # # . # #
            # . # # #
            # # . # #
            `)
        m1Speed = -255
        m2Speed = -255
        m3Speed = 255
        m4Speed = 255
    } else {
        m1Speed = 0
        m2Speed = 0
        m3Speed = 0
        m4Speed = 0
    }
    carMove(m1Speed, m2Speed, m3Speed, m4Speed)
})
let m4Speed = 0
let m3Speed = 0
let m2Speed = 0
let BleData = ""
let carSpeed = 0
let m1Speed = 0
m1Speed = 0
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
