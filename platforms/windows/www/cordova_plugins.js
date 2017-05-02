cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "org.apache.cordova.device.device",
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "pluginId": "org.apache.cordova.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "org.apache.cordova.device.DeviceProxy",
        "file": "plugins/org.apache.cordova.device/src/windows/DeviceProxy.js",
        "pluginId": "org.apache.cordova.device",
        "merges": [
            ""
        ]
    },
    {
        "id": "org.apache.cordova.device-motion.Acceleration",
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "pluginId": "org.apache.cordova.device-motion",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "id": "org.apache.cordova.device-motion.accelerometer",
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "pluginId": "org.apache.cordova.device-motion",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "id": "org.apache.cordova.device-motion.AccelerometerProxy",
        "file": "plugins/org.apache.cordova.device-motion/src/windows/AccelerometerProxy.js",
        "pluginId": "org.apache.cordova.device-motion",
        "merges": [
            ""
        ]
    },
    {
        "id": "org.apache.cordova.device-orientation.CompassError",
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "pluginId": "org.apache.cordova.device-orientation",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "pluginId": "org.apache.cordova.device-orientation",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "id": "org.apache.cordova.device-orientation.compass",
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "pluginId": "org.apache.cordova.device-orientation",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "id": "org.apache.cordova.dialogs.notification",
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "pluginId": "org.apache.cordova.dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "org.apache.cordova.dialogs.NotificationProxy",
        "file": "plugins/org.apache.cordova.dialogs/src/windows/NotificationProxy.js",
        "pluginId": "org.apache.cordova.dialogs",
        "merges": [
            ""
        ]
    },
    {
        "id": "org.apache.cordova.file.DirectoryEntry",
        "file": "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "id": "org.apache.cordova.file.DirectoryReader",
        "file": "plugins/org.apache.cordova.file/www/DirectoryReader.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "id": "org.apache.cordova.file.Entry",
        "file": "plugins/org.apache.cordova.file/www/Entry.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "id": "org.apache.cordova.file.File",
        "file": "plugins/org.apache.cordova.file/www/File.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "id": "org.apache.cordova.file.FileEntry",
        "file": "plugins/org.apache.cordova.file/www/FileEntry.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "id": "org.apache.cordova.file.FileError",
        "file": "plugins/org.apache.cordova.file/www/FileError.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "id": "org.apache.cordova.file.FileReader",
        "file": "plugins/org.apache.cordova.file/www/FileReader.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "id": "org.apache.cordova.file.FileSystem",
        "file": "plugins/org.apache.cordova.file/www/FileSystem.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "id": "org.apache.cordova.file.FileUploadOptions",
        "file": "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "id": "org.apache.cordova.file.FileUploadResult",
        "file": "plugins/org.apache.cordova.file/www/FileUploadResult.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "id": "org.apache.cordova.file.FileWriter",
        "file": "plugins/org.apache.cordova.file/www/FileWriter.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "id": "org.apache.cordova.file.Flags",
        "file": "plugins/org.apache.cordova.file/www/Flags.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "id": "org.apache.cordova.file.LocalFileSystem",
        "file": "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "id": "org.apache.cordova.file.Metadata",
        "file": "plugins/org.apache.cordova.file/www/Metadata.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "id": "org.apache.cordova.file.ProgressEvent",
        "file": "plugins/org.apache.cordova.file/www/ProgressEvent.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "id": "org.apache.cordova.file.fileSystems",
        "file": "plugins/org.apache.cordova.file/www/fileSystems.js",
        "pluginId": "org.apache.cordova.file"
    },
    {
        "id": "org.apache.cordova.file.requestFileSystem",
        "file": "plugins/org.apache.cordova.file/www/requestFileSystem.js",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "id": "org.apache.cordova.file.resolveLocalFileSystemURI",
        "file": "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
        "pluginId": "org.apache.cordova.file",
        "merges": [
            "window"
        ]
    },
    {
        "id": "org.apache.cordova.file.FileProxy",
        "file": "plugins/org.apache.cordova.file/src/windows/FileProxy.js",
        "pluginId": "org.apache.cordova.file",
        "merges": [
            ""
        ]
    },
    {
        "id": "org.apache.cordova.file-transfer.FileTransferError",
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransferError.js",
        "pluginId": "org.apache.cordova.file-transfer",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "id": "org.apache.cordova.file-transfer.FileTransfer",
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransfer.js",
        "pluginId": "org.apache.cordova.file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "id": "org.apache.cordova.file-transfer.FileTransferProxy",
        "file": "plugins/org.apache.cordova.file-transfer/src/windows/FileTransferProxy.js",
        "pluginId": "org.apache.cordova.file-transfer",
        "clobbers": [
            ""
        ]
    },
    {
        "id": "org.apache.cordova.geolocation.GeolocationProxy",
        "file": "plugins/org.apache.cordova.geolocation/src/windows/GeolocationProxy.js",
        "pluginId": "org.apache.cordova.geolocation",
        "runs": true
    },
    {
        "id": "org.apache.cordova.geolocation.Coordinates",
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "pluginId": "org.apache.cordova.geolocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "id": "org.apache.cordova.geolocation.PositionError",
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "pluginId": "org.apache.cordova.geolocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "id": "org.apache.cordova.geolocation.Position",
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "pluginId": "org.apache.cordova.geolocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "id": "org.apache.cordova.geolocation.geolocation",
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "pluginId": "org.apache.cordova.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "org.apache.cordova.globalization.GlobalizationError",
        "file": "plugins/org.apache.cordova.globalization/www/GlobalizationError.js",
        "pluginId": "org.apache.cordova.globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "id": "org.apache.cordova.globalization.globalization",
        "file": "plugins/org.apache.cordova.globalization/www/globalization.js",
        "pluginId": "org.apache.cordova.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "id": "org.apache.cordova.globalization.GlobalizationProxy",
        "file": "plugins/org.apache.cordova.globalization/src/windows/GlobalizationProxy.js",
        "pluginId": "org.apache.cordova.globalization",
        "runs": true
    },
    {
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "pluginId": "org.apache.cordova.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "id": "org.apache.cordova.inappbrowser.InAppBrowserProxy",
        "file": "plugins/org.apache.cordova.inappbrowser/src/windows/InAppBrowserProxy.js",
        "pluginId": "org.apache.cordova.inappbrowser",
        "merges": [
            ""
        ]
    },
    {
        "id": "org.apache.cordova.network-information.network",
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "pluginId": "org.apache.cordova.network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "org.apache.cordova.network-information.Connection",
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "pluginId": "org.apache.cordova.network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "org.apache.cordova.network-information.NetworkInfoProxy",
        "file": "plugins/org.apache.cordova.network-information/src/windows/NetworkInfoProxy.js",
        "pluginId": "org.apache.cordova.network-information",
        "merges": [
            ""
        ]
    },
    {
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "pluginId": "org.apache.cordova.splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "org.apache.cordova.console": "0.2.13",
    "org.apache.cordova.device": "0.3.0",
    "org.apache.cordova.device-motion": "0.2.11",
    "org.apache.cordova.device-orientation": "0.3.11",
    "org.apache.cordova.dialogs": "0.3.0",
    "org.apache.cordova.file": "1.3.3",
    "org.apache.cordova.file-transfer": "0.5.0",
    "org.apache.cordova.geolocation": "0.3.12",
    "org.apache.cordova.globalization": "0.3.4",
    "org.apache.cordova.inappbrowser": "0.6.0",
    "org.apache.cordova.network-information": "0.2.15",
    "org.apache.cordova.splashscreen": "1.0.0"
};
// BOTTOM OF METADATA
});