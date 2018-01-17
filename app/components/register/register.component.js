"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var firebase_service_1 = require("../../services/firebase.service");
var user_model_1 = require("../../models/user.model");
var RegisterComponent = (function () {
    function RegisterComponent(location, firebaseService) {
        this.location = location;
        this.firebaseService = firebaseService;
        this.isAuthenticating = false;
        this.user = new user_model_1.User();
    }
    RegisterComponent.prototype.goBack = function () {
        this.location.back();
    };
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        this.firebaseService.register(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this.location.back();
            //  this.toggleDisplay();
        })
            .catch(function (message) {
            alert(message);
            _this.isAuthenticating = false;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "rr-register",
            templateUrl: "register.component.html",
        }),
        __metadata("design:paramtypes", [common_1.Location, firebase_service_1.FirebaseService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUEyQztBQUUzQyxvRUFBZ0U7QUFDaEUsc0RBQTZDO0FBTzdDO0lBSUksMkJBQTJCLFFBQWtCLEVBQVUsZUFBZ0M7UUFBNUQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUh2RixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFLckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFBQSxpQkFXRDtRQVZDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDckMsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLHlCQUF5QjtRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxPQUFXO1lBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNmLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkJVLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FLdUMsaUJBQVEsRUFBMkIsa0NBQWU7T0FKOUUsaUJBQWlCLENBeUI3QjtJQUFELHdCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInJyLXJlZ2lzdGVyXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQge1xuICAgIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgdXNlcjogVXNlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSkge1xuXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxuICAgIHNpZ25VcCgpIHtcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICAgIC8vICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==