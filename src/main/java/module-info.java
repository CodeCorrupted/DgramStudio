module com.macanas.dgramstudio {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.controlsfx.controls;
    requires org.kordamp.ikonli.javafx;

    opens dgramstudio to javafx.fxml;
    exports dgramstudio;
    exports dgramstudio.controller;
    opens dgramstudio.controller to javafx.fxml;
}