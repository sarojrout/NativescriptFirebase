"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var firebase_service_1 = require("../../services/firebase.service");
var LoginComponent = (function () {
    function LoginComponent(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.isAuthenticating = false;
        this.user = {
            "email": "",
            "password": ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/home"], { clearHistory: true });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.firebaseService.login(this.user)
            .then(function () {
            _this.isAuthenticating = true;
            ApplicationSettings.setBoolean("authenticated", true);
            _this.router.navigate(["/home"], { clearHistory: true });
        })
            .catch(function (message) {
            _this.isAuthenticating = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "rr-login",
            templateUrl: "login.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, firebase_service_1.FirebaseService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCwwREFBNEQ7QUFDNUQsb0VBQWdFO0FBT2hFO0lBSUksd0JBQTJCLE1BQXdCLEVBQVUsZUFBZ0M7UUFBbEUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFIN0YscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBSXJCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixPQUFPLEVBQUMsRUFBRTtZQUNWLFVBQVUsRUFBQyxFQUFFO1NBQ2QsQ0FBQTtJQUNMLENBQUM7SUFFTSxpQ0FBUSxHQUFmO1FBQ0ksRUFBRSxDQUFBLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDTCxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUFBLGlCQVdEO1FBVkUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO1FBRTNELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLE9BQVc7WUFDakIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE1QlUsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FLcUMseUJBQWdCLEVBQTJCLGtDQUFlO09BSnBGLGNBQWMsQ0E4QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInJyLWxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgdXNlcjogVXNlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgXCJlbWFpbFwiOlwiXCIsXG4gICAgICAgICAgXCJwYXNzd29yZFwiOlwiXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbigpIHtcbiAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xuICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIHRydWUpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==